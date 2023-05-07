from django.db import models

# Create your models here.
CHOICES = (
    ('rany', 'Rainy'),
    ('storm', 'Storm'),
    ('sunny', 'Sunny'),
    ('cloudy', 'Cloudy')
)


class Report(models.Model):
    location = models.CharField(max_length=100)
    temperature = models.FloatField()
    created_at = models.DateTimeField()
    weather_type = models.CharField(max_length=10,choices=CHOICES,blank=True,null=True)

    def __str__(self) -> str:
        return super(f'{self.location}, {self.temperature}')
