from django.apps import apps
import os
import tensorflow as tf
import numpy as np
import tempfile
import PIL.Image as Image

IMAGE_SHAPE = (224, 224)


# Actual plant identification from an input image happens here
def identify(image):
    print("******** IDENTIFY ********")
    predicted_class = 1
    tf_model = apps.get_app_config('plant_api').tf_model
    with tempfile.NamedTemporaryFile(delete=False) as file:
        file.write(image.read())
        file.flush()
        file.close()
        ready_image = Image.open(file.name).resize(IMAGE_SHAPE)
        ready_image = np.array(ready_image) / 255.0
        result = tf_model.predict(ready_image[np.newaxis, ...])
        predicted_class = np.argmax(result[0], axis=-1)
        os.remove(file.name)

    print(predicted_class)
    # return the id of the predicted plant.
    return int(predicted_class + 1)
