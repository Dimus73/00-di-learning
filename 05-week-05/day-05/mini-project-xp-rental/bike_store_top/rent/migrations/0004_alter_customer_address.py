# Generated by Django 4.2 on 2023-04-27 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rent', '0003_alter_customer_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='address',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]