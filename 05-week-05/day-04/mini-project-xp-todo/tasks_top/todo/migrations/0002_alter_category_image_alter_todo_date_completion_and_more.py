# Generated by Django 4.2 on 2023-04-25 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='date_completion',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='date_creation',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='todo',
            name='deadline_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]