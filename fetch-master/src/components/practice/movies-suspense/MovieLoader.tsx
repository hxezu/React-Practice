export default function MovieLoader({ title }: { title: string }) {
  return (
    <>
      <article className="bg-black px-4 pt-4 xs:px-0">
        <section className="container mx-auto py-8 text-white">
          <span className="text-yellow-600">ONLINE STREAMING</span>
          <h2 className="text-[36px] font-bold mb-8">{title}</h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0 pb-[100%]">
            {/* 스켈레톤 */}
            <div className="animate-pulse">
              <div className="pt-[142%] bg-gray-200 rounded-md w-full"></div>
              <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-200">
                <div className="flex items-center gap-2 font-bold">
                  <div className="h-6 bg-gray-200 rounded w-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-8"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-10"></div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
