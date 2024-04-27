import React from 'react'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useBooking = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const { data: booking = [], refetch, isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/booking?email=${user.email}`);
            return res.data;
        }
    })
    return [booking, refetch, isLoading]
}

export default useBooking