import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime

path = 'img_in_bitmap'
images = []
classNames = []
myList = os.listdir(path)

for cl in myList:
    curImg = cv2.imread(f'{path}/{cl}')
    images.append(curImg)
    classNames.append(os.path.splitext(cl)[0])

def findEncodings(images):
    encodeList = []
    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)
        if len(encode) > 0:
            encodeList.append(encode[0])
    return encodeList

def markAttendance(name):
    with open('Attendance.csv', 'a') as f:
        now = datetime.now()
        dtString = now.strftime('%H:%M:%S')
        f.write(f'\n{name},{dtString}')

attendance_filename = 'Attendance.csv'
if not os.path.isfile(attendance_filename):
    with open(attendance_filename, 'w') as f:
        f.write('Name,Time')  # Write header row if the file is newly created

encodeListKnown = findEncodings(images)
print('Encoding Complete')

cap = cv2.VideoCapture(0)

while True:
    success, img = cap.read()
    imgS = cv2.resize(img, (0, 0), None, 0.5, 0.5)  # Adjust the scaling factor
    imgS = cv2.cvtColor(imgS, cv2.COLOR_BGR2RGB)

    facesCurFrame = face_recognition.face_locations(imgS, model='hog')  # Use 'hog' or 'cnn' based on what works better
    encodesCurFrame = face_recognition.face_encodings(imgS, facesCurFrame)

    for encodeCurFrame, faceLoc in zip(encodesCurFrame, facesCurFrame):
        # Compare the encoding of the current face to the known encodings
        matches = face_recognition.compare_faces(encodeListKnown, encodeCurFrame, tolerance=0.6)

        faceDis = face_recognition.face_distance(encodeListKnown, encodeCurFrame)
        matchIndex = np.argmin(faceDis)

        name = "Unknown"  # Default name if no match is found

        if matches[matchIndex]:
            name = classNames[matchIndex]
            markAttendance(name)  # Pass the correct name to the function

        # Draw a rectangle around the face
        y1, x2, y2, x1 = faceLoc
        y1, x2, y2, x1 = y1 * 2, x2 * 2, y2 * 2, x1 * 2  # Scale back to the original size
        cv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(img, name, (x1, y1 - 10), cv2.FONT_HERSHEY_COMPLEX, 0.5, (0, 255, 0), 2)

    # Display the result
    cv2.imshow('Webcam', img)

    # Check for the 'q' key to end the webcam scan
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the webcam and close the OpenCV window
cap.release()
cv2.destroyAllWindows()
