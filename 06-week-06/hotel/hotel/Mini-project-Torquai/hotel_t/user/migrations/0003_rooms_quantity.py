# Generated by Django 4.2.1 on 2023-05-12 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_rommphoto'),
    ]

    operations = [
        migrations.AddField(
            model_name='rooms',
            name='quantity',
            field=models.IntegerField(default=0),
        ),
    ]