# Generated by Django 4.2 on 2023-05-03 08:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0002_alter_film_available_in_countries_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='director',
            field=models.ManyToManyField(related_name='films', to='films.director'),
        ),
        migrations.AlterField(
            model_name='film',
            name='release_date',
            field=models.DateField(default=datetime.date(2023, 5, 3)),
        ),
    ]
