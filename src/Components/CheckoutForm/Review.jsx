import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function Review({ checkoutToken }) {
  return (
    <div>
      <h3>Order Summary</h3>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: '10px 0' }} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity ${product.quantity}`}
            />

            <Typography>{product.line_total.formatted_with_symbol}</Typography>
          </ListItem>
        ))}

        <ListItem style={{ padding: '10px 0' }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: '700' }}>
            {checkoutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </div>
  );
}

export default Review;
