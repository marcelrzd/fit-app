from django.db import models
from users.models import User

class BodyMeasurement(models.Model):
    id = models.CharField(
        primary_key=True,
        max_length=20,
        unique=True,
        editable=False,
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='body_measurements'
    )
    weight = models.FloatField()
    chest = models.FloatField()
    waist = models.FloatField()
    arm = models.FloatField()
    thigh = models.FloatField()
    fat = models.FloatField()
    calf = models.FloatField()
    hip = models.FloatField()
    shoulder = models.FloatField()
    date = models.DateField()

    def __str__(self):
        return f"{self.user.username} - {self.date}"
