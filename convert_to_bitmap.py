import cv2
import os

def convert_to_binary_bitmap(input_path, output_path):
    # Read the image
    img = cv2.imread(input_path)

    # Convert the image to grayscale
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Apply binary thresholding
    _, binary_img = cv2.threshold(gray_img, 128, 255, cv2.THRESH_BINARY)

    # Save the binary image as a bitmap
    cv2.imwrite(output_path, binary_img)

# Directory paths
input_directory = 'C:\\Users\\DELL\\OneDrive\\Desktop\\face recognization\\ImagesAttendance'
output_directory = 'C:\\Users\\DELL\\OneDrive\\Desktop\\face recognization\\img_in_bitmap'

# Loop through all images in the input directory
for filename in os.listdir(input_directory):
    if filename.endswith('.jpg') or filename.endswith('.jpeg'):
        input_image_path = os.path.join(input_directory, filename)
        output_bitmap_path = os.path.join(output_directory, os.path.splitext(filename)[0] + '_binary.bmp')
        convert_to_binary_bitmap(input_image_path, output_bitmap_path)
