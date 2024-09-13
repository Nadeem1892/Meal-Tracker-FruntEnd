import React, { useState } from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";

import { useGetChallengeQuery, useUpdateChallengeMutation } from "../../../Service/FatchApi";


const ListingChallanges = () => {


  const { data, error, isLoading } = useGetChallengeQuery();
  
  const [updateChallenge] = useUpdateChallengeMutation(); // Hook for update mutation

  // State to track visibility of daily challenges and their check status
  const [visibleChallenges, setVisibleChallenges] = useState({});
  const [dailyUpdatesState, setDailyUpdatesState] = useState({});

  // Get today's date in the format used in daily updates (DD-MM-YYYY)
  const today = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

  // Function to toggle the visibility of daily challenges
  const toggleVisibility = (id) => {
    setVisibleChallenges((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Function to handle checkbox change
  const handleCheckboxChange = async (challengeId, update) => {
    // Only allow changing today's challenge
    if (update.date !== today) return;

    const { date, isChecked } = update;

    try {
      await updateChallenge({ challengeId, date, isChecked: !isChecked }).unwrap(); // Call the mutation

      // Update local state to reflect the change
      setDailyUpdatesState((prevState) => ({
        ...prevState,
        [challengeId]: prevState[challengeId].map((item) =>
          item.date === date ? { ...item, isChecked: !item.isChecked } : item
        ),
      }));
    } catch (err) {
      console.error("Failed to update daily challenge", err);
    }
  };

  // Initialize dailyUpdatesState with fetched data
  React.useEffect(() => {
    if (data?.data) {
      const initialState = data.data.reduce((acc, challenge) => {
        acc[challenge._id] = challenge.dailyUpdates;
        return acc;
      }, {});
      setDailyUpdatesState(initialState);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching challenges</div>;


  return (
    <div className="container p-4 mx-auto mt-8">
      <h2 className="mb-6 text-3xl font-bold">Current Meal Challenges</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map((challenge) => (
          <div key={challenge._id} className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <p className="mb-4 text-green-500">{challenge.startDate}</p>
              <p className="mb-4 text-red-500">{challenge.endDate}</p>
            </div>
            <h3 className="flex items-center gap-2 mb-2 text-xl font-semibold">{challenge.challengeName} {challenge.isCompleted?<IoShieldCheckmark className="text-green-500"/>:<GrCompliance className="text-red-500"/>}</h3>
            <p className="mb-4 text-gray-600">{challenge.description}</p>
            <button
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              onClick={() => toggleVisibility(challenge._id)}
            >
              Today Challenge
            </button>

            {/* Conditionally render daily challenges if visible */}
            {visibleChallenges[challenge._id] && (
              <div className="mt-4">
                <h4 className="mb-2 text-lg font-semibold">Daily Challenges</h4>
                <ul>
                  {dailyUpdatesState[challenge._id]?.map((update, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`daily-${challenge._id}-${index}`}
                        checked={update.isChecked}
                        onChange={() => handleCheckboxChange(challenge._id, update)}
                        disabled={update.date !== today} // Disable checkboxes not for today
                        className="mr-2"
                      />
                      <label
                        htmlFor={`daily-${challenge._id}-${index}`}
                        className={`text-gray-700 ${update.date !== today ? "opacity-50 text-red-500" : "text-green-500"}`}
                      >
                        {update.date}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};







export default ListingChallanges;
