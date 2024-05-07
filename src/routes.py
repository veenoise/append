from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash

from src.db import get_db

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html')

