from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from markdown import markdown

bp = Blueprint('main', __name__)

@bp.route('/')
def index():
    return render_template('index.html')

@bp.route('/courses/<coursecode>/<topic>')
def course(coursecode, topic):
    html = markdown(open(f'courses/{coursecode}/{topic}.md').read())
    return render_template('course.html', course=html)

@bp.route('/courses/')
def courses():
    return render_template('courses.html')

@bp.route('/explore')
def explore():
    return render_template('explore.html')
