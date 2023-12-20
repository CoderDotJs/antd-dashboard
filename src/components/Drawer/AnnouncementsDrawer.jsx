import { Drawer } from 'antd';

function AnnouncementsDrawer({ placement, visible, onClose }) {
  const people = [
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      dev: 'manager',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      dev: 'developer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      dev: 'dev-ops',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
  ];

  return (
    <>
      <Drawer
        className="settings-drawer"
        mask={true}
        width={360}
        onClose={onClose}
        placement={placement}
        open={visible}
      >
        <div>
          <p className="truncate text-sm text-gray-500">Announcement</p>
          <div className="grid grid-cols-1 gap-1  ">
            {people.map((person) => (
              <>
                <div
                  key={person.email}
                  className=" mb-3 bg-white ring-1 ring-inset ring-gray-200 shadow-sm rounded-lg  px-2 py-1  "
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="inline-flex bg-red-300 items-center gap-x-1.5 rounded-full px-3 py-1 text-xs  text-white ">
                        <svg
                          className="h-1.5 w-1.5 fill-red-600"
                          viewBox="0 0 6 6"
                          aria-hidden="true"
                        >
                          <circle cx={3} cy={3} r={3} />
                        </svg>
                        Urgent
                      </span>
                    </div>
                    <div>
                      <p>9 hours later</p>
                    </div>
                  </div>
                  <div
                    key={person.email}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300  px-2 py-2  "
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-md"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <a href="#" className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="m-0 text-sm font-medium text-gray-900">
                          {person.name}
                        </p>
                        <p className="m-0 truncate text-sm text-gray-500">
                          {person.role}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <p className="truncate text-sm text-gray-500">Team Mates</p>
          <div className="grid grid-cols-1 gap-1  ">
            {people.map((person) => (
              <div
                key={person.email}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300  px-2 py-2  "
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="m-0 text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="m-0 truncate text-sm text-gray-500">
                      {person.dev}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default AnnouncementsDrawer;
