from django.db import models

class Species(models.Model):
    common_name = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=100, blank=True)
    description = models.TextField(null=False, blank=True, default="")
    about = models.TextField(null=False, blank=True, default="")
    fact = models.TextField(null=False, blank=True, default="")

    def __str__(self):
        return self.common_name
