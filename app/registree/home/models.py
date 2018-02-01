from django.db import models

class GetTranscript(models.Model):
    address = models.CharField(max_length=42)