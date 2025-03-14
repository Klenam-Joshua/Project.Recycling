export default function TopBanner({ title, description }) {
  return (
    <div id="top__banner" className="py-2 px-3">
      <h5 className="pl-2">{title}</h5>
      <p>{description}</p>
    </div>
  );
}
