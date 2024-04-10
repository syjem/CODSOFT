# React and Flask | Contact Manager

```bash
$ pip install -r requirements.txt
```

```bash
$ flask db init
$ flask db migrate
$ flask db upgrade
$ python scripts/seed.py
$ flask run
```

```py
import secrets

# Generate a random secret key
secret_key = ''.join(secrets.choice('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(-_=+)') for _ in range(50))

print(secret_key)
```
