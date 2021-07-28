# Generated by Django 3.2.5 on 2021-07-27 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Crop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_english', models.CharField(max_length=50)),
                ('title_patois', models.CharField(max_length=50)),
                ('inside_plant', models.BooleanField(default=False)),
                ('plant_size', models.PositiveSmallIntegerField(default=None)),
                ('average_yield', models.CharField(max_length=50)),
                ('how_to_care', models.CharField(max_length=400)),
                ('how_to_store', models.CharField(max_length=400)),
                ('description', models.CharField(max_length=400)),
                ('image', models.CharField(max_length=400)),
                ('instructions', models.JSONField()),
            ],
        ),
    ]
