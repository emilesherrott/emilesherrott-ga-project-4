from django.db import models

# Create your models here.
class Sow(models.Model):
    month = models.CharField(max_length=20, default=1)

    def __str__(self):
        return f"{self.month}"