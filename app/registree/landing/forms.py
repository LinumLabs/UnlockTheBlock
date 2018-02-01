from django import forms

class EnrollStudentsCsvForm(forms.Form):
    file = forms.FileField()

class UploadMarkCsvForm(forms.Form):
    file = forms.FileField()