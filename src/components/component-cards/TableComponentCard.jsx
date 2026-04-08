import ComponentCard from "../ComponentCard.jsx";
import Table from "../table/Table.jsx";

const columns = ["name", "email", "phone"];

export const usersData = [
    {
        id: crypto.randomUUID(),
        name: "John",
        email: "john@gmail.com",
        phone: "099123456"
    },
    {
        id: crypto.randomUUID(),
        name: "John",
        email: "john@gmail.com",
        phone: "099123456"
    },
    {
        id: crypto.randomUUID(),
        name: "John",
        email: "john@gmail.com",
        phone: "099123456"
    },
    {
        id: crypto.randomUUID(),
        name: "John",
        email: "john@gmail.com",
        phone: "099123456"
    },
    {
        id: crypto.randomUUID(),
        name: "John",
        email: "john@gmail.com",
        phone: "099123456"
    }
];

const tableActions = [
    {
        name: "edit",
        handler(id) {
            console.log("edit", id);
        }
    },
    {
        name: "delete",
        variant: "danger",
        handler(id) {
            console.log("delete", id);
        }
    }
];

const TableComponentCard = () => {
    return (
        <ComponentCard title="Table">
            <Table
                columns={columns}
                data={usersData}
                actions={tableActions}
            />
        </ComponentCard>
    );
}

export default TableComponentCard;