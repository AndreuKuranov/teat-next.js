interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {

  return (
    <ul style={{ padding: 0 }}>
      {props.items.map(props.renderItem)}
    </ul>
  )
}