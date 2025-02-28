const pandas = require('pandas-js');

function stkHistCreateDf(p_df, p_row_ct, p_api_id) {
  // Create df1 with the df columns plus idx, exch, symb and api_id and drop symbol
  const cols = ["idx", "datetime", "symbol", "exch", "symb", "open", "high", "low", "close", "volume", "api_id"];
  let df_out = p_df.loc(p_df.index, cols);

  // Convert the columns to appropriate data types
  df_out = df_out.astype({
    idx: 'string',
    datetime: 'string',
    symbol: 'string',
    exch: 'string',
    symb: 'string',
    open: 'float',
    high: 'float',
    low: 'float',
    close: 'float',
    volume: 'int',
    api_id: 'string'
  });

  // Update columns idx, api_id, datetime, exch, and symb
  for (let i = 0; i < p_row_ct; i++) {
    df_out.loc[i, 'idx'] = i.toString();
    df_out.loc[i, 'api_id'] = p_api_id.toString();
    df_out.loc[i, 'datetime'] = new Date(df_out.index[i]).toISOString();
    const symbl = df_out.loc[i, 'symbol'].split(':');
    df_out.loc[i, 'exch'] = symbl[0];
    df_out.loc[i, 'symb'] = symbl[1];
  }

  // Drop the symbol column and set idx as the index
  df_out = df_out.drop({ columns: ['symbol'] });
  df_out = df_out.set_index('idx');

  return df_out;
}

function getRowData(p_df) {
  // Create df1 with the df columns plus idx, datetime, open, high, low, close, and volume
  const cols = ["idx", "datetime", "open", "high", "low", "close", "volume"];
  let df_out = p_df.loc(p_df.index, cols);

  // Convert the columns to appropriate data types
  df_out = df_out.astype({
    idx: 'string',
    datetime: 'string',
    open: 'float',
    high: 'float',
    low: 'float',
    close: 'float',
    volume: 'int'
  });

  df_out.loc[0, 'idx'] = '0';
  df_out.loc[0, 'datetime'] = new Date(df_out.index[0]).toISOString();

  // Set idx as the index
  df_out = df_out.set_index('idx');

  return df_out;
}

module.exports = {
  stkHistCreateDf,
  getRowData
};