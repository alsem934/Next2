"use client";

export default function PastEvents() {
  const events = [
    {
      id: 1,
      name: "Event 1",
      venue: "Addis Amba Hotel, Addis Ababa",
      description:
        "Dev Meet Up 1 was an exciting event bringing together industry leaders to discuss emerging trends in technology.",
      organizers: ["Temikin Mengistu(chapi) ", "Meron Abate"],
      participants: [" 100+ developers and tech professionals"],
      images: [
        'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739111116/573A3714_gkcfax.jpg',
        'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112153/22_itkptz.jpg',
        'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112164/17_l9xqb8.jpg',
         'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112178/12_xqpvxm.jpg',
         'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112143/30_jsgrfz.jpg'
      ],
    },
    {
      id: 2,
      name: "Event 2",
      venue: "ALX Hub, Addis Ababa",
      description:
        "Dev Meet Up 2 focused on entrepreneurship and innovation, featuring inspiring talks from top innovators.",
      organizers: ["Codenight Community Admins"],
      participants: [ "200+ developers and tech professionals"],
      images: [
        'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112133/34_ituygd.jpg',
         'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112040/85_bfirx9.jpg',
      
          'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739112013/311_utbcdi.jpg',
           'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739111945/762_efziic.jpg',
            'https://res.cloudinary.com/dhc9bxqx2/image/upload/v1739111983/734_jbbwog.jpg',
       
      
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-4">
          Past Events
        </h1>
        {events.map((event) => (
          <div key={event.id} className="mb-8 border-b border-gray-300 pb-6">
            <h2 className="text-xl font-semibold text-gray-700">{event.name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Venue:</strong> {event.venue}
            </p>
            <p className="text-gray-700 mb-3">{event.description}</p>
            <p className="text-gray-600">
              <strong>Organizers:</strong> {event.organizers.join(", ")}
            </p>
            <p className="text-gray-600">
              <strong>Participants:</strong> {event.participants.join(", ")}
            </p>

            {/* Memories Images Section */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Memories</h3>
              <div className="grid grid-cols-3 gap-2">
                {event.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Memory from ${event.name}`}
                    className="w-full h-32 object-cover rounded-md shadow"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
