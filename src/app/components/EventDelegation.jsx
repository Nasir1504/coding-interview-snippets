'use client'

export default function EventDelegation() {

  const handleClick = (e) => {
    const tag = e.target;

    if (tag.tagName === "LI") {
      tag.style.textDecoration = "line-through"
    }
  }
  return (
    <div>
      <ul onClick={handleClick}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  )
}
