from setuptools import setup

setup(
    name='strawberry',
    version='0.1.0',
    description='Theme for Sphinx',

    packages=['strawberry'],
    package_data={'strawberry': [
        'theme.conf',
        '*.html',
        'static/js/*.js',
        'static/css/*.css'
    ]},
    include_package_data=True,

    entry_points = {
        'sphinx.html_themes': [
            'strawberry = strawberry'
        ]
    }
)
