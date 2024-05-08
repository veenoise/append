from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash

from src.db import get_db

from markdown import markdown

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/courses/<coursecode>/<topic>')
def course(coursecode, topic):
    html = markdown(open(f'courses/{coursecode}/{topic}.md').read())
    return render_template('course.html', course=html)

