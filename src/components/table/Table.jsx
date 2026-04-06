import Button from "../button/Button.jsx";

const Table = ({ columns, data, actions, openEditUserModal, openDeleteUserModal }) => {
    return (
        <table className="table-fixed rounded-lg w-full outline outline-gray-300 shadow-sm shadow-gray-300">
            <thead>
                <tr className="font-semibold border-b-2 border-gray-300">
                    {columns.map((column) => (
                        <td key={column} className="capitalize py-3 px-4">{column}</td>
                    ))}

                    {/* Actions */}
                    {actions?.length > 0 && (
                        <td className="capitalize py-3 px-4">actions</td>
                    )}
                </tr>
            </thead>
            <tbody className="*:last:border-none">
            {data.length > 0 ? (
                data.map(item => (
                    <tr key={item.id} className="font-medium border-b border-gray-300">
                        {columns.map((column) => (
                            <td className="py-2 px-4" key={column}>{item[column]}</td>
                        ))}

                        {/* Actions columns */}
                        {actions?.length > 0 && (
                            <td className="flex gap-3 py-2 px-4">
                                {actions?.map(action => (
                                    <Button
                                        key={action.name}
                                        className="capitalize"
                                        variant={action.name === "delete" && "danger"}
                                        onClick={() => action.handler(item?.id)}
                                    >
                                        {action.name}
                                    </Button>
                                ))}
                            </td>
                        )}
                    </tr>
                ))
            ) : (
                <tr>
                    <th className="py-3 px-4 self-center font-medium text-gray-500" colSpan={4}>There is no users available</th>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default Table;