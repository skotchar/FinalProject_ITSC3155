import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.graph_objs as go

# Which data sets we using
#df1 = pd.read_csv('')
#df2 = pd.read_csv('')

app = dash.Dash()
app.layout = html.Div(children=[
    html.H1(children='Visualization Page',
            style={
                'textAlign': 'center',
                'color': '#000000'
            }),
    # dates Fix
    html.Div('CO2 Emissions - Dates',
             style={'textAlign': 'center'}),
    html.Br(), html.Hr(style={'color': '#7FDBFF'}),
    html.H3('Interactive Bar Chart of CO2 Emissions', style={'color': '#000000'}),
    dcc.Graph(id='graph1'),
    html.Div('Please select a continent', style={'color': '#ef3e18', 'margin': '10px'}),
    dcc.Dropdown(id='select-continent', options=[
        {'label': 'Asia', 'value': 'Asia'},
        {'label': 'Africa', 'value': 'Africa'},
        {'label': 'Europe', 'value': 'Europe'},
        {'label': 'North America', 'value': 'North America'},
        {'label': 'Oceania', 'value': 'Oceania'},
        {'label': 'South America', 'value': 'South America'},
    ], value='Europe')
])


@app.callback(Output('graph1', 'figure'), [Input('select-continent', 'value')])
def update_figure(selected_continent):
    return 0;


if __name__ == '__main__':
    app.run_server()