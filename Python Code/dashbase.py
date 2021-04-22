# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

import dash
import dash_html_components as html
import dash.dependencies as dd
import dash_core_components as dcc
from dash.exceptions import *
import plotly.graph_objects as go
import pandas as pd

# TODO make arrow images
arrow = ['/localhost/images/ArrowLeft.jpg', '/localhost/images/ArrowRight.jpg']
emissions_css = ['css/emission_planner.css']
# TODO make helpbutton image
logo = ['/localhost/images/Emissions Planner Logo.jpg', '/localhost/images/HelpButton.jpg']
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

app = dash.Dash(__name__, external_stylesheets=emissions_css)


"""
    defines the html layout for the home page
    @param logos - an array of images used for logos or button graphics
    @param figures - graph data
    returns html layout for
"""


def home_layout(logos, figures):
    return html.Div(children=[
            html.Span(id='banner', children=[
                html.Img(id='aLogo', src=app.get_asset_url(str(logos[0]))),
                html.H1('Home')]),
            html.Div(id='body', children=[
                html.Div(id='home_top_left', children=[
                    html.P("insert product statment here", id='product_vision'),
                    html.Div(id='home_bottom_left', children=[
                        html.Button('Start Tutorial', id='home_tutorial_button', n_clicks=0)])]),
                html.Div(id='home_top_right', children=[
                    html.H2('Select a country from map')]),
                html.Div(id='home_bottom_right', children=[
                    html.Div(id='home_map_back', children=[dcc.Graph(id='choropleth', figure=figures)])
                ])
            ])
        ])


"""
    defines the html layout for the visualization page
    @param logos - the emissions planner logo
    @param figures - graph data
    @param dissable_button - dissable all buttons on the page (used for tutorial only) (default false)
    returns html layout for
"""
# TODO visualization html


def visualization_layout(logos, figures, dissable_button=False):
    return 1


"""
    defines the html layout for the tutorial with visualization page as back ground
    @param logos - the emissions planner logo
    @param figures - graph data
    @param dissable_button - dissable all buttons on the page (used for tutorial only) (default false)
    returns html layout for
"""
# TODO visualization page + tutorial html code buttons on visualization page should not work only buttons for tutorial


def visual_tutorial_layout(logos, arrows, figures, dissable_non_tutorial_button=True):
    return html.Div(children=[
            visualization_layout(logos, figures, dissable_non_tutorial_button),
            html.Button('Quit', id='stop_tutorial', n_clicks=0),
            html.Div(id='tutorial_back_panel_left', hidden=False, children=[
                html.Button('Previous', id='previous_button_left', n_clicks=0, disabled=False, hidden=False),
                html.Progress(id='tutorial_progress_left', value=1, max=10, hidden=False, children=[
                    html.P('1/10', id='counter_left', hidden=False)]),
                html.Button('Next', id='next_button_left', n_clicks=0, disabled=False, hidden=False)
            ]),
            html.Div(id='arrow_panel_right', hidden=False, children=[
                html.Img(id='make_a_plan_arrow', src=app.get_asset_url(str(arrows[1])), hidden=True),
                html.Img(id='top_20_arrow', src=app.get_asset_url(str(arrows[1])), hidden=True),
                html.Img(id='emissions_over_time_arrow', src=app.get_asset_url(str(arrows[1])), hidden=True),
                html.Img(id='compare_2_arrow', src=app.get_asset_url(str(arrows[1])), hidden=True),
            ]),
            html.Div(id='tutorial_back_panel_right', hidden=True, children=[
                html.Button('Previous', id='previous_button_right', n_clicks=0, disabled=True, hidden=True),
                html.Progress(id='tutorial_progress_right', value=1, max=10, hidden=True, children=[
                    html.P('1/10', id='counter_right', hidden=True)]),
                html.Button('Next', id='next_button_right', n_clicks=0, disabled=True, hidden=True)
            ]),
            html.Div(id='arrow_panel_left', hidden=True, children=[
                html.Img(id='figure_arrow', src=app.get_asset_url(str(arrows[1])), hidden=True),
                html.Img(id='fig_description_arrow', src=app.get_asset_url(str(arrows[1])), hidden=True),
            ])
        ])


def switch_layout(val, logos, arrows, figures, dissable_button):
    if val == 0:
        return home_layout(logos, figures)
    elif val == 1:
        return visual_tutorial_layout(logos, arrows, figures, dissable_button)
    elif val == 2:
        return visualization_layout(logos, figures, dissable_button)
"""
    Callbacks for button elements
"""


@app.callback(
    dd.Output('page', 'children'),
    [dd.Input('home_tutorial_button' or 'visualization_tutorial_button', 'n_clicks')])
def switch_to_tutorial_mode(value):
    # TODO switch home page to visualization and start tutorial mode
    if value == 0:
        raise PreventUpdate
    else:
        logos = logo
        arrows = arrow
        figures = fig
        dissable_button = True
        value = 0
        return switch_layout(1, logos, arrows, figures, dissable_button)

if __name__ == '__main__':
    # start up on the home page
    app.layout = html.Div(id='page', children=[home_layout(logo, fig)])
    app.run_server(debug=True)

