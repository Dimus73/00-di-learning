# Generated by Django 4.2 on 2023-04-27 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rent', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='phone_number',
            field=models.CharField(blank=True, db_index=True, max_length=15, null=True),
        ),
    ]