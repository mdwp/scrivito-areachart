import * as React from 'react';
import * as Scrivito from 'scrivito';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';



Scrivito.provideComponent("AreaChartWidget", ({ widget }) => {
    const items = widget.get('items');
    const type = widget.get('type') || 'simple';
    const label1 = widget.get('label1');
    const label2 = widget.get('label2');

    let data  = items.map((item) => {

      let obj = ({name: item.get('name'), [label1]: item.get('value1'), [label2]: item.get('value2')})
      return obj;
    });

    if (!items.length && Scrivito.isInPlaceEditingActive()) {
      return (
          <h4 className="text-center">
            Provide the areachart values in the widget properties..
          </h4>
      );
    }

    return (
      type === 'stacked' ?
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}
            margin={{top: 10, right: 0, left: -25, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey={label1} stackId="1" stroke='#3367d6' fill='#3367d6'/>
            <Area type='monotone' dataKey={label2} stackId="1" stroke='#59AA2B' fill='#59AA2B'/>

        </AreaChart>
    </ResponsiveContainer>
    :

    <ResponsiveContainer width="100%" height={200}>
    <AreaChart data={data}
            margin={{top: 10, right: 0, left: -25, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey={label1} stroke='#3367d6' fill='#3367d6'/>
            <Area type='monotone' dataKey={label2} stackId="1" stroke='#59AA2B' fill='#59AA2B'/>
    </AreaChart>
    </ResponsiveContainer>


    );
  }
)





