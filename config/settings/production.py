from os import getenv, path

from dotenv import load_dotenv

from .base import *

from .base import BASE_DIR

local_env_file = path.join(BASE_DIR, ".envs", ".env.local")

if path.isfile(local_env_file):
    load_dotenv(local_env_file)


# SECRET_KEY = 'django-insecure-nbkmo-eh=t&ye66@z=lh3w$9pimj22gog=530$$avhxtx0u_nh'

SECRET_KEY = getenv(
    "DJANGO_SECRET_KEY"
)

ALLOWED_HOSTS = []


ADMINS = [("Alpha Omondi Ogilo", "api.imperfect@gmail.com"),]
