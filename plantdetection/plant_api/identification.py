from django.apps import apps
import tensorflow as tf
import numpy as np

IMAGE_SHAPE = (224, 224)


# Actual plant identification from an input image happens here
def identify(image):
    tf_model = apps.get_app_config('plant_api').tf_model
    result = tf_model.predict(image)
    # return the id of the predicted plant.
    return result
