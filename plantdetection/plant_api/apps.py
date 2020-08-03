from django.apps import AppConfig

class PlantApiConfig(AppConfig):
    name = 'plant_api'
    def ready(self):
        print("APP READY CALLED")
        import tensorflow as tf
        self.tf_model = tf.keras.models.load_model("plant_api/tf_model")