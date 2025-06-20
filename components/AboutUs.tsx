export default async function AboutUs() {
  return (
    <section className="w-full py-16 px-6" id="about">
      <div className="max-w-7xl mx-auto text-center border-1.5 border rounded-lg p-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-relaxed text-justify">
          At BuildSleek, we uphold a strong commitment to delivering
          high-quality software solutions with a focus on{" "}
          <span className="text-primary font-semibold">
            punctuality, integrity, and transparency
          </span>
          . We understand the unique needs of each client, ensuring that our
          custom web applications and enterprise systems not only meet but
          exceed expectations. Our team is dedicated to maintaining open
          communication throughout the project lifecycle, ensuring timely
          delivery without compromising on quality. We adhere to ethical
          business practices, continuously innovate, and strive for excellence
          in everything we do, building lasting partnerships through trust and
          mutual success.
        </p>
      </div>
    </section>
  );
}
