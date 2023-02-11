from django.db import models
from django.contrib.auth.models import User

import uuid
import io
from PIL import Image
from django.core.files.base import ContentFile
from django.db.models.fields.files import ImageFieldFile

# Create your models here.

class JPGFieldFile(ImageFieldFile):
    def save(self, name, content, save=True):
        content.file.seek(0)
        image = Image.open(content.file)
        image_bytes = io.BytesIO()
        image.save(fp=image_bytes, format="JPG")
        image_content_file = ContentFile(content=image_bytes.getvalue())
        super().save(name, image_content_file, save)

class JPGField(models.ImageField):
    attr_class = JPGFieldFile

def image_folder(instance, filename):
    return 'pgimg-{}.jpg'.format(uuid.uuid4().hex)

class Images(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    image_upload = JPGField(verbose_name="Image", upload_to=image_folder)
    title = models.CharField(max_length=250, null=False, blank=False)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title
