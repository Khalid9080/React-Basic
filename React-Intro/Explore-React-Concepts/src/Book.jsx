

// ei Books.js componenet ta BookStore.jsx file a use/export kora hoise.
export default function Book({ boi }) {
    return (
        <div>
            <h3>Book:{boi.name}, Author:{boi.author}</h3>
        </div>
    );
}