const e = React.createElement;

export function ReactSelect({ value, options, onChange }) {
  return e(
    'select',
    {
      value,
      onChange: (event) => {
        onChange(event.target.value);
      },
    },
    options.map((option) => e('option', { key: option, value: option }, option))
  );
}
