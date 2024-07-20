export default function Header1({temp}) {
  return(
    <div className="text-center mb-6">
      <h2 className="text-3xl zain-bold text-gray-800">Welcome To SkincareTracker!</h2>
      <p className="text-2xl text-gray-600 zain-regular">{temp}</p>
    </div>
  )
}