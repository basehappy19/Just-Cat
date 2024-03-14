function AppSearch(props) {
    const { value, onValueChange } = props
    return (
        <div className="app-search">
          <input
            className="form-control mb-3"
            type="text"
            placeholder="ค้นหา"
            value={value}
            onChange={(event) => {
              (onValueChange(event.target.value));
            }}
          />
        </div>
    )
}

export default AppSearch;