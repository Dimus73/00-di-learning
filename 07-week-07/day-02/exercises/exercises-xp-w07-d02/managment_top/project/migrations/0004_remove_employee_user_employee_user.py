# Generated by Django 4.2.1 on 2023-05-10 08:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('project', '0003_remove_employee_user_employee_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='user',
        ),
        migrations.AddField(
            model_name='employee',
            name='user',
            field=models.OneToOneField(default=None,on_delete=django.db.models.deletion.CASCADE, related_name='reg_user', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
