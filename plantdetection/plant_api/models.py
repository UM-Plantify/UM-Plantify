from django.db import models

class Species(models.Model):
    common_name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.common_name
