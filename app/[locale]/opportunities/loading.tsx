export default function Loading() {
  return (
    <main className="flex justify-center items-center min-h-[50vh]">

      <div className="text-center">

        <div
          className="h-12 w-12 mx-auto rounded-full border-4 border-black border-t-transparent animate-spin"/>

        <p className="mt-5 text-xl font-semibold">
          Loading opportunities...
        </p>

      </div>

    </main>
  );
}