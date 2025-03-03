export default function TopBanner({ title, description }) {
  return (
    <div id="top__banner" className="py-3 px-3">
      <h5 className="pl-2">{title}</h5>
      <p>{description}</p>
    </div>
  );
}
