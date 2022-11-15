from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Images(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image_upload = models.ImageField(null=True, blank=True)
    image_link = models.CharField(max_length=500, null=True, blank=True)
    title = models.CharField(max_length=250, null=False, blank=False)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title
