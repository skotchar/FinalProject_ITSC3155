# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

import dash
import dash_html_components as html
import dash_core_components as dcc
import plotly.graph_objects as go
import pandas as pd

home_css = ['css/home.css']
visual_css = ['css/visual.css']
tutorial_css = ['css/tutorial.css']
logo = '/localhost/images/Emissions Planner Logo.jpg'
# TODO Figure out why image is not showing up, it might be a bug with dash?
# TODO create choropleth map as fig
df = pd.read_csv('datasets/API_EN.ATM.CO2E.KT_DS2_en_csv_v2_2163797.csv')

fig = go.Figure(data=go.Choropleth(
    locations = df['Country Name'],
    colorscale = 'Blues',
    autocolorscale=False,
    reversescale=True,
))

fig.update_layout(
    title_text='World Map',
    geo=dict(
        showframe=False,
        showcoastlines=False,
        projection_type='equirectangular'
    ),
    annotations = [dict(
        x=0.55,
        y=0.1,
        xref='paper',
        yref='paper',
        text='Source: ',
        showarrow = False
    )]
)

app = dash.Dash(__name__, external_stylesheets=home_css)

"""
    defines the html layout for the home page
"""
def home_layout(logos, figures):
    return html.Div(children=[
        html.Span(id='banner', children=[html.Img(id='aLogo', src=logos)]),
        html.Div(id='body', children=[html.Div(id='home_left', children=[html.P("insert product statment here")]),
                                      html.Div(id='home_right', children=[
                                                html.H2('Select a country from map'),
                                                html.Div(id='map_back', children=[dcc.Graph(id='choropleth', figure=figures)
                                                                                  ])
                                          ])
                                      ])
    ])


# TODO visualization html code
def visualization_layout(figures):
    pass


# TODO tutorial html code
def tutorial_layout(figures):
    pass


# TODO make a function that changes layout when page changes
app.layout = home_layout(logo, fig)

if __name__ == '__main__':
    app.run_server(debug=True)

