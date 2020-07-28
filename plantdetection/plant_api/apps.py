from django.apps import AppConfig
import tensorflow as tf

class PlantApiConfig(AppConfig):
    name = 'plant_api'
    def ready(self):
        self.tf_model = tf.keras.models.load_model("tf_model")