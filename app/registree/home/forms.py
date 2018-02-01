from django import forms
from home.models import GetTranscript

class GetTranscriptForm(forms.ModelForm):
    class Meta:
        model = GetTranscript
        fields = ('address',)