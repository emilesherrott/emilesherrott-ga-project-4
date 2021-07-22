from django.db import models

# Create your models here.
class Crop(models.Model):
    title_english = models.CharField(max_length=50)
    title_patois = models.CharField(max_length=50)
    plant_size = models.PositiveSmallIntegerField(default=None)
    average_yield = models.CharField(max_length=50)
    how_to_care = models.CharField(max_length=400)
    description = models.CharField(max_length=400)
    how_to_store = models.CharField(max_length=400)

    def __str__(self):
        return f"{self.title_english} - {self.title_patois}"

        